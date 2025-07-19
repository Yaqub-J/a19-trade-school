"use client"

import fs from 'fs';
import path from 'path';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Papa from 'papaparse';

const ROADMAPS_DIR = path.join(process.cwd(), 'Roadmaps for Professions Categorized by Industry');
const CSV_PATH = path.join(ROADMAPS_DIR, 'profession_list.csv');

function slugify(str: string) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
}

export async function getStaticProps() {
  const csv = fs.readFileSync(CSV_PATH, 'utf8');
  const { data } = Papa.parse(csv, { header: true, skipEmptyLines: true });
  const files = fs.readdirSync(ROADMAPS_DIR);
  const roadmapFiles = new Set(
    files.filter(f => f.endsWith('Career Roadmap.md')).map(f => f.replace(' Career Roadmap.md', ''))
  );
  const professions = data.map((row: any) => {
    const profession = row['Profession']?.trim();
    const category = row['Industry/Sector']?.trim();
    const hasRoadmap = roadmapFiles.has(profession);
    return {
      profession,
      category,
      slug: slugify(profession),
      hasRoadmap,
    };
  });
  return { props: { professions } };
}

export default function RoadmapsPage({ professions }: { professions: any[] }) {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Explore Learning Roadmaps</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Structured learning paths designed to take you from beginner to professional
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {professions.map((prof) => (
            <Card key={prof.slug} className="hover:shadow-2xl transition-all duration-300 group">
              <CardHeader>
                <Badge variant="secondary">{prof.category}</Badge>
                <CardTitle className="text-xl group-hover:text-yellow-600 transition-colors">{prof.profession}</CardTitle>
                <CardDescription>{prof.hasRoadmap ? 'Comprehensive roadmap available' : 'Roadmap coming soon'}</CardDescription>
              </CardHeader>
              <CardContent>
                {prof.hasRoadmap ? (
                  <Link href={`/roadmaps/${prof.slug}`}>
                    <Button className="w-full group-hover:bg-yellow-600 transition-colors">View Roadmap</Button>
                  </Link>
                ) : (
                  <Badge variant="outline" className="w-full text-center">Coming Soon</Badge>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
