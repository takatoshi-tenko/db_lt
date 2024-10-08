// src/pages/api/users.js
import { query } from '../../lib/db';

export default async function handler(req, res) {
  try {
    const result = await query('SELECT * FROM users');  // usersテーブルから全データ取得
    res.status(200).json(result.rows);                  // データをJSON形式で返す
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'データの取得に失敗しました' });
  }
}
