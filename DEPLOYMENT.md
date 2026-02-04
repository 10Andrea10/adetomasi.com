# Portfolio Website - Deployment Guide

## Overview

This Next.js portfolio website is configured for static export and automated deployment to AWS S3 with CloudFront CDN.

## GitHub Actions Setup

### Required GitHub Secrets & Variables

Before deploying, configure these in your GitHub repository settings:

**Variables** (Settings → Secrets and variables → Actions → Variables):
- `AWS_KEY_ID` - Your AWS Access Key ID
- `AWS_BUCKET` - S3 bucket name (e.g., `my-portfolio-bucket`)
- `CLOUDFRONT_DISTRIBUTION_ID` - CloudFront distribution ID (e.g., `E1234567890ABC`)

**Secrets** (Settings → Secrets and variables → Actions → Secrets):
- `AWS_SECRET_ACCESS_KEY` - Your AWS Secret Access Key

### Deployment Workflow

The workflow in `.github/workflows/deploy.yml` automatically:
1. **Builds** the Next.js site as static HTML/CSS/JS
2. **Uploads** the build artifact
3. **Syncs** files to S3 bucket
4. **Invalidates** CloudFront cache for instant updates

**Triggers:**
- Push to `main` branch
- Manual workflow dispatch

## Configuration Files

- **next.config.ts** - Configured for static export with `output: 'export'`
- **.github/workflows/deploy.yml** - GitHub Actions deployment workflow
- **lib/data.ts** - Portfolio content (update this to change website content)

## Updating Content

1. Edit `lib/data.ts` to update:
   - Personal information
   - Work experience
   - Education
   - Projects
   - Skills

2. Replace `public/profile.png` with your photo
3. Replace `public/cv.pdf` with your CV
4. Commit and push to `main` branch
5. GitHub Actions will automatically deploy
