import React from 'react';
import { useRouter } from 'next/router';
import REDetail from '../../src/REDetail';

export default function REDetailPage() {
  const router = useRouter();
  const { reid } = router.query;

  // Pass the reid as a prop or use it within REDetail component
  return <REDetail />;
} 