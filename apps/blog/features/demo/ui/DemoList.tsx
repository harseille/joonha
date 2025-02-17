'use client';

import React from 'react';
import { useFetchList } from '~/features/demo/hooks/useFetchList';

export default function DemoList() {
  const { data: list, isLoading, error } = useFetchList();

  if (isLoading) return <div>Loading demo list...</div>;
  if (error) return <div>Error fetching demo list.</div>;

  return (
    <div className="rounded-lg border bg-card p-6 shadow-sm">
      <h3 className="text-2xl font-semibold leading-none tracking-tight mb-4">
        데모 리스트
      </h3>
      <div className="space-y-4">
        {list?.map((item: { id: number; title: string; body: string }) => (
          <div key={item.id} className="space-y-2">
            <h4 className="font-medium leading-none">{item.title}</h4>
            <p className="text-sm text-muted-foreground">{item.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
