'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';

interface Note {
  id: number;
  title: string;
  content: string;
}

export default function Home() {
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/notes/')
      .then(res => setNotes(res.data as Note[]))
      .catch(err => console.error(err));
  }, []);

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Notes</h1>
      {notes.map(note => (
        <div key={note.id} className="mb-2 p-4 border rounded">
          <h2 className="font-semibold">{note.title}</h2>
          <p>{note.content}</p>
        </div>
      ))}
    </main>
  );
}
