import React from 'react';

interface ProjectPlaceholderProps {
  title: string;
  className?: string;
}

export function ProjectPlaceholder({ title, className = '' }: ProjectPlaceholderProps) {
  return (
    <div 
      className={`bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center ${className}`}
      style={{ aspectRatio: '4/3' }}
    >
      <div className="text-center p-8">
        <div className="text-4xl font-bold text-foreground mb-2">{title}</div>
        <div className="text-sm text-muted-foreground">Project Screenshot</div>
      </div>
    </div>
  );
}


