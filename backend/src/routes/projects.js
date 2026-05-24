import express from 'express'
import authMiddleware from "../middleware/authMiddleware.js"
import pool from "../db/pool.js"

const router = express.Router()



router.get('/', async (req, res) => {
  const { rows } = await pool.query('SELECT * FROM projects')
  res.json(rows)
})

router.post('/', authMiddleware, async (req, res) => {
  const { title, mini_description, full_description, image_url, github_url, site_url } = req.body

  const { rows } = await pool.query('INSERT INTO projects ( title, mini_description, full_description, image_url, github_url, site_url ) VALUES ( $1, $2, $3, $4, $5, $6 ) RETURNING *', [title, mini_description, full_description, image_url, github_url, site_url])
  res.json(rows[0])
})

router.put('/:id', authMiddleware, async (req, res) => {
  const { title, mini_description, full_description, image_url, github_url, site_url } = req.body
  const { id } = req.params

  const { rows } = await pool.query('UPDATE projects SET title = $1, mini_description = $2, full_description = $3, image_url = $4, github_url = $5, site_url = $6  WHERE id = $7', [title, mini_description, full_description, image_url, github_url, site_url, id])

  res.json(rows[0])
})

router.delete('/:id', authMiddleware, async (req, res) => {
  const { rows } = await pool.query('DELETE FROM projects WHERE id = $1', [req.params.id])

  res.json(rows)
})




export default router

