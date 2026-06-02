/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface PortfolioImage {
  id: string;
  title: string;
  year: number;
  photographer: string;
  project: string;
  category: 'Editorial' | 'Portrait' | 'Commercial' | 'Artistic' | 'Lifestyle';
  description: string;
  imageUrl: string;
  aspectRatio: 'portrait' | 'landscape' | 'square';
  goldRating?: boolean;
}

export interface Campaign {
  id: string;
  title: string;
  brand: string;
  year: number;
  role: string;
  description: string;
  imageUrl: string;
  color: string;
}

export interface LookbookPage {
  id: string;
  pageNumber: number;
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  layoutType: 'split' | 'full' | 'editorial' | 'asymmetric';
  quote?: string;
}

export interface VideoItem {
  id: string;
  title: string;
  type: 'Cinema Teaser' | 'Acting Monologue' | 'Photographic BTS' | 'Acting Reel';
  duration: string;
  thumbnailUrl: string;
  videoPlaceholderUrl?: string;
  year: number;
  description: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  companyOrBrand: string;
}

export interface AchievementStats {
  photoshoots: number;
  campaigns: number;
  countries: number;
  publications: number;
  collaborations: number;
}
