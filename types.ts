import React from 'react';

export interface App {
  name: string;
  url: string;
  icon: React.FC<{ className?: string }>;
  description: string;
}