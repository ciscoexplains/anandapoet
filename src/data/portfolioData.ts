/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { PortfolioImage } from '../types';

// Curated local photoshoot assets with 'gold' flags indicating high-resolution/high-quality files (>500KB)
const BASE_LOCAL_PHOTOS = [
  {
    path: '/assets/038E3D61-C1DA-430B-94FA-374D339619AA.jpg',
    aspect: 'portrait' as const,
    tag: 'editorial',
    gold: true,
    title: 'Moody Doorway Reflection',
    description: 'An intimate, cinematic editorial portrait of Ananda Poet sitting beside a distressed wooden doorway frame, capturing soft window light and quiet contemplation.'
  },
  {
    path: '/assets/0b641165-ba33-43c3-9952-01652d0dd2ba.jpg',
    aspect: 'portrait' as const,
    tag: 'high-fashion',
    gold: false,
    title: 'Navy Lace Kebaya Gown',
    description: 'An elegant fashion portrait of Ananda Poet wearing a modern navy blue lace kebaya-inspired gown with a long batik train, sitting elegantly on a living room sofa.'
  },
  {
    path: '/assets/1409E9C5-E6DA-4427-B796-F1B79B4280B6.jpg',
    aspect: 'portrait' as const,
    tag: 'commercial',
    gold: true,
    title: 'Bohemian Library Study',
    description: 'Ananda Poet sitting cross-legged on a woven rug in front of stacks of vintage books and a rustic plaster wall, highlighting a warm, studious lifestyle look.'
  },
  {
    path: '/assets/14527746-C3AB-4A6F-B7FF-5C91FE6B4DC4.JPEG',
    aspect: 'portrait' as const,
    tag: 'lifestyle',
    gold: true,
    title: 'Elegant Slip Dress Evening',
    description: 'A stylish lifestyle shot of Ananda Poet wearing a sleek black satin evening gown and holding a wine glass in a modern concrete industrial setting.'
  },
  {
    path: '/assets/2F050D04-4A40-4400-881C-36A55527A031.jpg',
    aspect: 'portrait' as const,
    tag: 'artistic',
    gold: false,
    title: 'Neon Shadow Portrait',
    description: 'An artistic studio closeup of Ananda Poet framed under moody, vibrant dual-tone neon blue and red lights.'
  },
  {
    path: '/assets/31B7E049-C79F-4648-BD05-303FEDF3D301.jpg',
    aspect: 'portrait' as const,
    tag: 'portrait',
    gold: false,
    title: 'Terrace Afternoon with Pomeranian',
    description: 'A casual lifestyle portrait of Ananda Poet standing barefoot against a white wall next to a Pomeranian puppy, holding a warm cup.'
  },
  {
    path: '/assets/44B914FC-FD87-4D3E-9F31-6726145622A8.JPEG',
    aspect: 'portrait' as const,
    tag: 'theatrical',
    gold: true,
    title: 'Sensual Bedroom Awakening',
    description: 'A moody, artistic study capturing the silhouette of Ananda Poet from behind as she stands in front of a sunlit bedroom setting.'
  },
  {
    path: '/assets/53A15401-71F6-4139-B030-8ABBF64BB7DA.jpg',
    aspect: 'portrait' as const,
    tag: 'editorial',
    gold: false,
    title: 'Monochrome Headshot Portrait',
    description: 'A striking black and white studio portrait showcasing a clean, classic headshot of Ananda Poet with an intense, direct gaze.'
  },
  {
    path: '/assets/54DDE92C-E3F5-4E4A-9A78-B4C38AB15AB9.jpg',
    aspect: 'portrait' as const,
    tag: 'lifestyle',
    gold: true,
    title: 'Intimate Nightfall Soirée',
    description: 'A beautiful lifestyle image of Ananda Poet in a black slip dress, holding a wine glass and looking off-camera in a warmly lit, moody room.'
  },
  {
    path: '/assets/67EF7B24-741F-4D03-B744-4145DAB99E27.jpg',
    aspect: 'portrait' as const,
    tag: 'artistic',
    gold: false,
    title: 'Sunset Golden Hour Selfie',
    description: 'An intimate closeup selfie of Ananda Poet illuminated by warm, direct golden sunset lighting, highlighting natural freckled makeup.'
  },
  {
    path: '/assets/91A7C019-519B-4E4B-AB0C-1A1136C79519.jpg',
    aspect: 'portrait' as const,
    tag: 'commercial',
    gold: false,
    title: 'Elegant Backlit Window Silhouette',
    description: 'A beautiful backlit commercial silhouette of Ananda Poet wearing a black gown, leaning against a large glass window pane looking out.'
  },
  {
    path: '/assets/931A7716-F7CC-4BCF-ABD5-E978FB677499.jpg',
    aspect: 'portrait' as const,
    tag: 'theatrical',
    gold: true,
    title: 'Introspective Mirror Reflection',
    description: 'An artistic theatrical portrait capturing Ananda Poet looking at her reflection in a large, antique wooden-carved mirror frame.'
  },
  {
    path: '/assets/BF6A1846-E683-49BB-ACE7-F87F4C0C0311.JPG',
    aspect: 'portrait' as const,
    tag: 'portrait',
    gold: true,
    title: 'Bridal Lace Staircase Portrait',
    description: 'A lovely portrait of Ananda Poet wearing an elaborate white lace wedding dress with a long tulle train, sitting gracefully on tiled stairs.'
  },
  {
    path: '/assets/DD109167-DF1F-4B4D-B4D9-F046F807C319.jpg',
    aspect: 'portrait' as const,
    tag: 'high-fashion',
    gold: true,
    title: 'Cardigan Reflection Study',
    description: 'A high-fashion mirror selfie study of Ananda Poet adjusting a cozy knit cardigan in front of a rustic wooden mirror.'
  },
  {
    path: '/assets/F1D10215-2A3A-4093-A386-2958CA6E3E95.JPG',
    aspect: 'portrait' as const,
    tag: 'editorial',
    gold: false,
    title: 'Bedside Pillow Close-up',
    description: 'A casual, top-down selfie of Ananda Poet lying on a bed pillow, highlighting a natural look with detailed freckles.'
  },
  {
    path: '/assets/FE48E927-0627-4C28-A8B9-FDE8509934F3.JPEG',
    aspect: 'portrait' as const,
    tag: 'commercial',
    gold: false,
    title: 'Virtual Audition Video Call',
    description: 'A screen snapshot showing Ananda Poet on a video call for a virtual casting audition, wearing a simple black top.'
  },
  {
    path: '/assets/IMG_2235.jpg',
    aspect: 'portrait' as const,
    tag: 'lifestyle',
    gold: true,
    title: 'Balinese Royal Heritage',
    description: 'An elegant lifestyle portrait of Ananda Poet in full traditional Balinese wedding attire and golden crown, holding a decorated fan against green foliage.'
  },
  {
    path: '/assets/IMG_3392.JPG',
    aspect: 'portrait' as const,
    tag: 'artistic',
    gold: true,
    title: 'Retro Chic Sunglasses Look',
    description: 'An artistic portrait of Ananda Poet wearing retro sunglasses and a vibrant rust-orange halter crop top, standing in front of a modern brick column.'
  },
  {
    path: '/assets/IMG_8935.jpg',
    aspect: 'portrait' as const,
    tag: 'theatrical',
    gold: false,
    title: 'Candid Warm Dining Room Study',
    description: 'A soft, warm-toned selfie of Ananda Poet indoors, with a cozy wooden dining room, table, chairs, and flowers blurred behind her.'
  },
  {
    path: '/assets/IMG_9235.jpg',
    aspect: 'portrait' as const,
    tag: 'portrait',
    gold: true,
    title: 'Golden Hour Bedside Shadow',
    description: 'A tranquil portrait capturing Ananda Poet resting her head on a bed pillow, with dramatic golden sunset sunlight casting deep shadows.'
  }
];

const mapTagToCategory = (tag: string): 'Editorial' | 'Portrait' | 'Commercial' | 'Artistic' | 'Lifestyle' => {
  switch (tag) {
    case 'high-fashion':
    case 'editorial':
      return 'Editorial';
    case 'commercial':
      return 'Commercial';
    case 'lifestyle':
      return 'Lifestyle';
    case 'artistic':
    case 'theatrical':
      return 'Artistic';
    case 'portrait':
    default:
      return 'Portrait';
  }
};

const generatePortfolioImages = (): PortfolioImage[] => {
  return BASE_LOCAL_PHOTOS.map((basePhoto, index) => {
    const category = mapTagToCategory(basePhoto.tag);
    const i = index + 1;
    return {
      id: `photo-${i}`,
      title: basePhoto.title,
      year: 2026 - (i % 3),
      photographer: 'ANANDAPOET',
      project: 'Private Gallery Exhibition',
      category,
      description: basePhoto.description,
      imageUrl: basePhoto.path,
      aspectRatio: basePhoto.aspect,
      goldRating: basePhoto.gold
    };
  });
};

export const PORTFOLIO_IMAGES: PortfolioImage[] = generatePortfolioImages();

export const HIGH_FASHION_BANNER_PHOTOS = [
  '/assets/IMG_2235.jpg',
  '/assets/44B914FC-FD87-4D3E-9F31-6726145622A8.JPEG',
  '/assets/DD109167-DF1F-4B4D-B4D9-F046F807C319.jpg',
  '/assets/1409E9C5-E6DA-4427-B796-F1B79B4280B6.jpg',
  '/assets/IMG_8935.jpg',
];

export const CAMPAIGNS: any[] = [];
export const LOOKBOOK_PAGES: any[] = [];
export const VIDEO_PORTFOLIO_ITEMS: any[] = [];
export const TESTIMONIALS: any[] = [];
export const ACHIEVEMENTS = {
  photoshoots: 0,
  campaigns: 0,
  countries: 0,
  publications: 0,
  collaborations: 0
};
