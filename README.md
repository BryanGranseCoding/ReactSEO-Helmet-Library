# SEO Setup Guide for Vite React Project

This guide provides step-by-step instructions for setting up SEO in a Vite React project using React Helmet Async.

## Table of Contents

1. [Project Setup](#project-setup)
2. [Installing Dependencies](#installing-dependencies)
3. [Creating the SEO Component](#creating-the-seo-component)
4. [Implementing the SEO Component](#implementing-the-seo-component)
5. [Usage Examples](#usage-examples)

## Project Setup

1. Create a new Vite React project with TypeScript:

```bash
npm create vite@latest my-project -- --template react-ts
cd my-project
```

2. Install base dependencies:

```bash
npm install
```

## Installing Dependencies

1. Install React Helmet Async for managing document head tags:

```bash
npm install react-helmet-async
```

## Creating the SEO Component

1. Create a new file `src/components/SEO.tsx`:

```tsx
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords: string[];
  image?: string;
  url?: string;
  type?: string;
  author?: string;
}

export function SEO({ 
  title, 
  description, 
  keywords,
  image = '/meta/default-og-image.jpg',
  url = 'https://yourdomain.com',
  type = 'website',
  author = 'Your Name'
}: SEOProps) {
  const siteTitle = 'Your Site Name';
  const fullTitle = `${title} | ${siteTitle}`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="UTF-8" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={siteTitle} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
    </Helmet>
  );
}
```

## Implementing the SEO Component

1. Wrap your app with `HelmetProvider` in `src/App.tsx`:

```tsx
import { HelmetProvider } from 'react-helmet-async';

function App() {
  return (
    <HelmetProvider>
      {/* Your app components */}
    </HelmetProvider>
  );
}
```

2. Use the SEO component in your pages:

```tsx
import { SEO } from '../components/SEO';

function HomePage() {
  return (
    <>
      <SEO 
        title="Home"
        description="Welcome to our website"
        keywords={['react', 'vite', 'typescript']}
      />
      {/* Page content */}
    </>
  );
}
```

## Usage Examples

### Basic Usage

```tsx
<SEO 
  title="Home"
  description="Welcome to our website"
  keywords={['react', 'vite', 'typescript']}
/>
```

### With Optional Parameters

```tsx
<SEO 
  title="Blog Post"
  description="An interesting article about React"
  keywords={['react', 'javascript', 'web development']}
  image="https://yourdomain.com/images/blog-post.jpg"
  url="https://yourdomain.com/blog/post-1"
  type="article"
  author="John Doe"
/>
```

### For Different Page Types

#### Blog Post Page
```tsx
<SEO 
  title="Blog Post Title"
  description="Blog post excerpt or summary"
  keywords={['blog', 'article', 'relevant', 'keywords']}
  type="article"
/>
```

#### Product Page
```tsx
<SEO 
  title="Product Name"
  description="Product description"
  keywords={['product', 'category', 'features']}
  type="product"
  image="/products/product-image.jpg"
/>
```

## Best Practices

1. **Unique Titles**: Each page should have a unique, descriptive title.

2. **Meta Descriptions**: Keep descriptions between 150-160 characters for optimal display in search results.

3. **Keywords**: Use relevant, focused keywords (though their SEO impact is minimal).

4. **Images**: Always provide high-quality OpenGraph images for better social media sharing.

5. **URLs**: Use canonical URLs to prevent duplicate content issues.

## Testing

1. Use the [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/) to test OpenGraph tags.

2. Use the [Twitter Card Validator](https://cards-dev.twitter.com/validator) to test Twitter Cards.

3. Use [Google's Rich Results Test](https://search.google.com/test/rich-results) to test structured data.

## Additional Considerations

1. **Dynamic Content**: Update meta tags based on page content:
```tsx
<SEO 
  title={post.title}
  description={post.excerpt}
  keywords={post.tags}
  image={post.featuredImage}
  url={`/blog/${post.slug}`}
/>
```

2. **Default Values**: Set up default values for optional props:
```tsx
const DEFAULT_IMAGE = '/meta/default-og-image.jpg';
const DEFAULT_AUTHOR = 'Your Site Name';
```

3. **TypeScript Types**: Export types for reuse:
```tsx
export interface SEOProps {
  title: string;
  description: string;
  keywords: string[];
  image?: string;
  url?: string;
  type?: string;
  author?: string;
}
```

## Troubleshooting

1. **Meta Tags Not Updating**: Ensure you're using `HelmetProvider` at the root level.

2. **Images Not Showing**: Verify image URLs are absolute paths.

3. **Multiple Titles**: Check for multiple SEO components on the same page.

## Resources

- [React Helmet Async Documentation](https://github.com/staylor/react-helmet-async)
- [Open Graph Protocol](https://ogp.me/)
- [Twitter Cards Documentation](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards)