# Image Gallery Website

A simple static website with hover-triggered image lightboxes.

## 📁 Project Structure

```
my-website/
├── index.html          # Home page
├── page1.html          # Example content page 1
├── page2.html          # Example content page 2
├── page3.html          # Example content page 3
├── style.css           # Shared CSS styling
├── script.js           # Lightbox JavaScript
├── images/             # All your images go here
│   ├── sample1.jpg
│   ├── sample2.jpg
│   └── ...
└── README.md           # This file
```

## 🚀 Getting Started

### Testing Locally

1. Open any `.html` file in your web browser
2. Hover over the blue dotted underlined text to see images pop up
3. Click the X or press Escape to close the lightbox

## 📝 Creating New Pages

### Quick Method (Copy & Paste)

1. Copy `page3.html` to create a new page (e.g., `page4.html`)
2. Edit the content inside the `<div class="content">` section
3. Update the `<title>` tag
4. Add your new page to the navigation menu in ALL pages

### Adding to Navigation

In each HTML file, update the `<nav>` section:

```html
<nav>
    <a href="index.html">Home</a>
    <a href="page1.html">Topic 1</a>
    <a href="page2.html">Topic 2</a>
    <a href="page3.html">Topic 3</a>
    <a href="page4.html">Topic 4</a>  <!-- Add your new page -->
</nav>
```

## 🖼️ Adding Image Triggers

To make text show an image on hover, use this format:

```html
<span class="image-trigger" 
      data-image="images/your-image.jpg" 
      data-caption="Optional caption text">
    your clickable text here
</span>
```

**Example:**
```html
<p>This is about 
<span class="image-trigger" 
      data-image="images/sunset.jpg" 
      data-caption="A beautiful sunset">
    beautiful sunsets
</span> in California.</p>
```

### Tips:
- Put all images in the `images/` folder
- Use descriptive filenames (e.g., `california-sunset.jpg` not `img001.jpg`)
- Caption is optional - you can omit `data-caption` if you don't need it
- You can use the same image on multiple pages

## 📤 Deploying to GitHub Pages

### Step 1: Create a GitHub Account
1. Go to https://github.com
2. Sign up for a free account

### Step 2: Create a New Repository
1. Click the "+" in the top right → "New repository"
2. Name it: `your-username.github.io` (replace `your-username` with your actual GitHub username)
3. Make it Public
4. Don't initialize with README, .gitignore, or license
5. Click "Create repository"

### Step 3: Upload Your Files
Two options:

#### Option A: Using GitHub Web Interface (Easiest)
1. On your repository page, click "uploading an existing file"
2. Drag all your files and folders into the upload area
3. Scroll down and click "Commit changes"
4. Wait 1-2 minutes

#### Option B: Using Git Command Line
```bash
# In your my-website folder:
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/your-username/your-username.github.io.git
git push -u origin main
```

### Step 4: Access Your Site
Your website will be live at: `https://your-username.github.io`

### Updating Your Site
- Web interface: Upload new files (they'll overwrite old ones)
- Git: `git add .`, `git commit -m "Update"`, `git push`

## 🎨 Customization

### Changing Colors
Edit `style.css`:
- Line 5: Background color
- Line 14-16: Heading colors
- Line 22-23: Navigation bar colors
- Line 43-44: Link colors

### Changing Fonts
Edit line 2 of `style.css`:
```css
font-family: 'Arial', sans-serif;  /* Change this */
```

### Adjusting Lightbox Size
Edit `style.css` lines 69-70:
```css
max-width: 90%;     /* Change to make larger/smaller */
max-height: 90%;
```

## 🔧 Advanced: Automating Page Creation

Since you know Python, here's a script to generate pages automatically:

```python
template = '''<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{title}</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <nav>
        {nav_links}
    </nav>

    <div class="content">
        <h1>{title}</h1>
        {content}
    </div>

    <footer>
        <p>&copy; 2025 My Website | <a href="index.html">Back to Home</a></p>
    </footer>

    <script src="script.js"></script>
</body>
</html>'''

# Generate 20 pages
for i in range(1, 21):
    nav_links = '\n        '.join([f'<a href="page{j}.html">Page {j}</a>' 
                                   for j in range(1, 21)])
    content = f'<p>Content for page {i}</p>'
    
    html = template.format(
        title=f"Page {i}",
        nav_links=nav_links,
        content=content
    )
    
    with open(f'page{i}.html', 'w') as f:
        f.write(html)

print("Generated 20 pages!")
```

## 📊 Scaling to 200 Pages

### Organized Approach:
1. **Plan your structure**: Create a spreadsheet mapping page names to topics
2. **Organize images**: Use subfolders (e.g., `images/topic1/`, `images/topic2/`)
3. **Use a Python script**: Generate pages programmatically (see above)
4. **Consider a static site generator**: For 200 pages, look into Jekyll, Hugo, or 11ty

### File Organization for Large Sites:
```
my-website/
├── index.html
├── topics/
│   ├── category1/
│   │   ├── page1.html
│   │   └── page2.html
│   └── category2/
│       ├── page3.html
│       └── page4.html
├── images/
│   ├── category1/
│   └── category2/
├── style.css
└── script.js
```

## 🐛 Troubleshooting

**Images don't show:**
- Check the file path in `data-image` is correct
- Make sure images are in the `images/` folder
- Check image filename matches exactly (case-sensitive!)

**Lightbox doesn't appear:**
- Make sure `script.js` is in the same folder as your HTML
- Check browser console for errors (F12 → Console tab)

**Page not found on GitHub:**
- Wait 2-3 minutes after uploading
- Check repository name is exactly `your-username.github.io`
- Make sure repository is Public, not Private

## 📚 Learning Resources

- HTML: https://developer.mozilla.org/en-US/docs/Web/HTML
- CSS: https://developer.mozilla.org/en-US/docs/Web/CSS
- JavaScript: https://developer.mozilla.org/en-US/docs/Web/JavaScript
- GitHub Pages: https://pages.github.com

## 💡 Next Steps

1. Replace sample images with your own
2. Create your first 5-10 pages with real content
3. Test locally in your browser
4. Deploy to GitHub Pages
5. Share your site!

Good luck with your website! 🎉
