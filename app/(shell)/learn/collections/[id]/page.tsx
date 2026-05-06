import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import SwipeDeck from '../../../../components/learn/SwipeDeck';
import Icon from '../../../../components/ui/Icon';
import { getCollectionById } from '../../../../data/collections';
import { getCommandById } from '../../../../data/commands';

interface PageProps {
  params: { id: string };
}

export default function CollectionDetailPage({ params }: PageProps) {
  const collection = getCollectionById(params.id);
  if (!collection) notFound();

  const deck = collection.commandIds
    .map((id) => getCommandById(id))
    .filter((c): c is NonNullable<typeof c> => Boolean(c));

  return (
    <div className="px-6 space-y-5">
      <Link
        href="/learn/collections"
        className="inline-flex items-center gap-2 text-on-surface-variant hover:text-primary text-sm transition-colors"
      >
        <Icon name="arrow_back" className="text-base" />
        All collections
      </Link>
      <header className="space-y-1">
        <p className="font-headline text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant">
          Path
        </p>
        <h1 className="font-headline font-bold text-2xl text-on-surface tracking-tight">
          {collection.title}
        </h1>
        <p className="text-on-surface-variant text-sm leading-relaxed">
          {collection.description}
        </p>
      </header>
      <SwipeDeck commands={deck} />
    </div>
  );
}
