import React from 'react';
import SwipeDeck from '../../../components/learn/SwipeDeck';
import { commands } from '../../../data/commands';

export default function SwipeLearnPage() {
  return (
    <div className="px-6">
      <SwipeDeck commands={commands} />
    </div>
  );
}
