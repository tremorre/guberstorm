# QUICK START GUIDE

## First Steps

1. **Test it locally**
   - Double-click `index.html` to open it in your browser
   - Hover over the blue underlined text to see images pop up
   - Click around to see how everything works

2. **Add your images**
   - Put all your images in the `images/` folder
   - Delete the sample images (sample1.jpg through sample5.jpg)
   - Use descriptive filenames like "sunset-california.jpg" not "img001.jpg"

3. **Create your first page**
   - Copy `template.html` and rename it (e.g., `my-first-page.html`)
   - Open it in a text editor
   - Replace "PAGE TITLE HERE" with your actual title
   - Replace the content with your own text
   - Add image triggers where needed

4. **Add image triggers**
   Format:
   ```html
   <span class="image-trigger" 
         data-image="images/your-image.jpg" 
         data-caption="Optional description">
       your text here
   </span>
   ```

5. **Update navigation**
   - Open ALL your HTML files
   - Find the `<nav>` section
   - Add a link to your new page:
   ```html
   <a href="my-first-page.html">My First Page</a>
   ```

## Deploying to GitHub Pages

1. Create GitHub account at https://github.com
2. Create new repository named: `your-username.github.io`
3. Upload all your files to the repository
4. Wait 1-2 minutes
5. Visit: https://your-username.github.io

## Tips

- Test everything locally first before uploading
- Keep your navigation menu consistent across all pages
- Use the Python script (`generate_pages.py`) to create many pages at once
- Organize images in subfolders if you have a lot
- Read the full README.md for more details

## Getting Help

- Check README.md for detailed instructions
- Browser console (F12) shows errors
- Make sure file paths match exactly (case-sensitive!)

Good luck! 🚀
