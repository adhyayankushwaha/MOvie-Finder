import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(express.json());

const TMDB_BASE_URL = 'https://api.themoviedb.org/3';

function getApiKey(): string {
  return (
    process.env.TMDB_API_KEY?.trim() ||
    process.env.VITE_TMDB_API_KEY?.trim() ||
    ''
  );
}

function buildHeaders(): Record<string, string> {
  const key = getApiKey();
  const headers: Record<string, string> = {
    Accept: 'application/json',
  };
  if (key.startsWith('eyJ')) {
    headers['Authorization'] = `Bearer ${key}`;
  }
  return headers;
}

function buildTmdbUrl(endpoint: string, queryParams: Record<string, any> = {}): string {
  const key = getApiKey();
  const url = new URL(`${TMDB_BASE_URL}${endpoint}`);

  if (key && !key.startsWith('eyJ')) {
    url.searchParams.set('api_key', key);
  }

  Object.entries(queryParams).forEach(([k, v]) => {
    if (v !== undefined && v !== null && v !== '') {
      url.searchParams.set(k, String(v));
    }
  });

  return url.toString();
}

// 1. Status Check
app.get('/api/tmdb/status', async (_req, res) => {
  const key = getApiKey();
  if (!key) {
    return res.json({
      connected: false,
      message: 'No TMDB API key configured in environment variables.',
    });
  }

  try {
    const url = buildTmdbUrl('/authentication');
    const response = await fetch(url, { headers: buildHeaders() });
    const data = await response.json();
    const success = response.ok && data.success !== false;
    return res.json({
      connected: success,
      message: success ? 'Live TMDB API connected successfully' : (data.status_message || 'Invalid key'),
    });
  } catch (err: any) {
    return res.status(500).json({ connected: false, message: err.message });
  }
});

// 2. Genres
app.get('/api/tmdb/genres', async (_req, res) => {
  const key = getApiKey();
  if (!key) {
    return res.status(400).json({ error: 'No TMDB API key configured' });
  }
  try {
    const url = buildTmdbUrl('/genre/movie/list', { language: 'en-US' });
    const response = await fetch(url, { headers: buildHeaders() });
    const data = await response.json();
    return res.status(response.status).json(data);
  } catch (err: any) {
    return res.status(500).json({ error: err.message });
  }
});

// 3. Trending
app.get('/api/tmdb/trending', async (req, res) => {
  const key = getApiKey();
  if (!key) {
    return res.status(400).json({ error: 'No TMDB API key configured' });
  }
  const timeWindow = req.query.timeWindow === 'week' ? 'week' : 'day';
  const page = req.query.page || 1;

  try {
    const url = buildTmdbUrl(`/trending/movie/${timeWindow}`, { page });
    const response = await fetch(url, { headers: buildHeaders() });
    const data = await response.json();
    return res.status(response.status).json(data);
  } catch (err: any) {
    return res.status(500).json({ error: err.message });
  }
});

// 4. Discover by Genre / Sort
app.get('/api/tmdb/discover', async (req, res) => {
  const key = getApiKey();
  if (!key) {
    return res.status(400).json({ error: 'No TMDB API key configured' });
  }
  const { with_genres, sort_by, page = 1 } = req.query;

  try {
    const url = buildTmdbUrl('/discover/movie', {
      with_genres,
      sort_by: sort_by || 'popularity.desc',
      page,
      include_adult: 'false',
      language: 'en-US',
    });
    const response = await fetch(url, { headers: buildHeaders() });
    const data = await response.json();
    return res.status(response.status).json(data);
  } catch (err: any) {
    return res.status(500).json({ error: err.message });
  }
});

// 5. Search
app.get('/api/tmdb/search', async (req, res) => {
  const key = getApiKey();
  if (!key) {
    return res.status(400).json({ error: 'No TMDB API key configured' });
  }
  const { query, page = 1 } = req.query;

  try {
    const url = buildTmdbUrl('/search/movie', {
      query,
      page,
      include_adult: 'false',
      language: 'en-US',
    });
    const response = await fetch(url, { headers: buildHeaders() });
    const data = await response.json();
    return res.status(response.status).json(data);
  } catch (err: any) {
    return res.status(500).json({ error: err.message });
  }
});

// 6. Movie Details with Videos, Credits, and Similar
app.get('/api/tmdb/movie/:id', async (req, res) => {
  const key = getApiKey();
  if (!key) {
    return res.status(400).json({ error: 'No TMDB API key configured' });
  }
  const { id } = req.params;

  try {
    const url = buildTmdbUrl(`/movie/${id}`, {
      append_to_response: 'videos,credits,similar',
      language: 'en-US',
    });
    const response = await fetch(url, { headers: buildHeaders() });
    const data = await response.json();
    return res.status(response.status).json(data);
  } catch (err: any) {
    return res.status(500).json({ error: err.message });
  }
});

// Mount Vite or static dist
async function startServer() {
  const isProd = process.env.NODE_ENV === 'production';

  if (!isProd) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server listening on port ${PORT}`);
  });
}

startServer();
