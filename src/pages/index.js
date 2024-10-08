// src/pages/index.js
import { useEffect, useState } from 'react';

export default function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      const response = await fetch('/api/users');       // APIエンドポイントにアクセス
      const data = await response.json();               // データをJSON形式で取得
      setUsers(data);                                   // データをステートに保存
      console.log(data)
    }

    fetchUsers();
  }, []);

  return (
    <div>
      <h1>Users List</h1>
      <ul>
        {users && users.map(user => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
