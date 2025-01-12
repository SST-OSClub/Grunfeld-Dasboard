'use client';

import Link from 'next/link';
import { Github } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { Student } from '@/lib/supabase/types';

// Dummy data for students
const dummyStudents = [
  {
    id: '1',
    name: 'Alex Johnson',
    points: 1250,
    ranking: 1,
    github_url: 'https://github.com/alex',
    badge_count: 15,
    certificate_count: 5,
    created_at: '2024-01-01'
  },
  {
    id: '2',
    name: 'Sarah Chen',
    points: 980,
    ranking: 2,
    github_url: 'https://github.com/sarah',
    badge_count: 12,
    certificate_count: 4,
    created_at: '2024-01-15'
  },
  {
    id: '3',
    name: 'Michael Park',
    points: 850,
    ranking: 3,
    github_url: 'https://github.com/michael',
    badge_count: 10,
    certificate_count: 3,
    created_at: '2024-02-01'
  },
  {
    id: '4',
    name: 'Emma Wilson',
    points: 720,
    ranking: 4,
    github_url: 'https://github.com/emma',
    badge_count: 8,
    certificate_count: 2,
    created_at: '2024-02-15'
  },
  {
    id: '5',
    name: 'David Lee',
    points: 650,
    ranking: 5,
    github_url: 'https://github.com/david',
    badge_count: 6,
    certificate_count: 2,
    created_at: '2024-03-01'
  }
] as Student[];

export default function StudentList() {
  return (
    <div className="space-y-4">
      {dummyStudents.map((student) => (
        <Card key={student.id} className="p-6 transition-all hover:shadow-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="h-12 w-12 rounded-full bg-gradient-to-br from-chart-1 to-chart-2 flex items-center justify-center text-white font-bold">
                #{student.ranking}
              </div>
              <div>
                <Link
                  href={`/profile/${student.id}`}
                  className="text-lg font-semibold hover:text-primary"
                >
                  {student.name}
                </Link>
                <div className="flex items-center space-x-4 mt-1 text-sm text-muted-foreground">
                  <span>{student.points} points</span>
                  <Badge variant="secondary">{student.badge_count} badges</Badge>
                  <Badge variant="outline">
                    {student.certificate_count} certificates
                  </Badge>
                </div>
              </div>
            </div>
            {student.github_url && (
              <a
                href={student.github_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
            )}
          </div>
        </Card>
      ))}
    </div>
  );
}