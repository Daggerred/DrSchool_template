# 📍 How to Add Google Maps to Your School Website

## Step-by-Step Guide (With Screenshots Instructions)

### **Method 1: Embedded Interactive Map (Recommended)**

#### **Step 1: Go to Google Maps**
Open: https://www.google.com/maps

#### **Step 2: Search Your School**
Type your school's full address in the search box:
```
Dr. Rajendra Prasad Girija Devi Public School, [Your City]
```

#### **Step 3: Click "Share" Button**
- Look for the **"Share"** button (usually on the left side panel)
- Click it

#### **Step 4: Click "Embed a map" Tab**
- You'll see two tabs: "Send a link" and "Embed a map"
- Click **"Embed a map"**

#### **Step 5: Choose Map Size**
- Small: 400 x 300
- Medium: 600 x 450 (Recommended)
- Large: 800 x 600
- Custom: Set your own size

#### **Step 6: Copy the Code**
- Click **"COPY HTML"** button
- You'll get code that looks like this:
```html
<iframe src="https://www.google.com/maps/embed?pb=..." width="600" height="450" ...></iframe>
```

#### **Step 7: Replace in Your Website**
1. Open `index.html` file
2. Find this section (around line 835):
```html
<!-- REPLACE THIS IFRAME WITH YOUR GOOGLE MAPS EMBED CODE -->
<iframe 
  src="https://www.google.com/maps/embed?pb=!1m18!1m12..."
  ...
</iframe>
```
3. **Replace the entire `<iframe>` tag** with your copied code

#### **Step 8: Update the "Open in Google Maps" Link**
Find this line (around line 850):
```html
<a href="https://maps.google.com/?q=YOUR_SCHOOL_ADDRESS" ...>
```

Replace `YOUR_SCHOOL_ADDRESS` with your actual address:
```html
<a href="https://maps.google.com/?q=Dr.+Rajendra+Prasad+Girija+Devi+Public+School+Delhi" ...>
```

---

## **Method 2: Simple Link (No Embed)**

If you just want a link to Google Maps:

```html
<a href="https://maps.google.com/?q=28.6139,77.2090" target="_blank">
  View on Google Maps
</a>
```

Replace `28.6139,77.2090` with your school's coordinates.

---

## **How to Get Your School's Coordinates:**

1. Go to Google Maps
2. Search your school
3. Right-click on the location pin
4. Click "What's here?"
5. You'll see coordinates like: `28.6139, 77.2090`
6. Click to copy them

---

## **Example: Complete Map Section**

Here's what your final code should look like:

```html
<div class="map-container" style="margin-top: 24px; border-radius: 12px; overflow: hidden; height: 400px;">
  <iframe 
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.123!2d77.2090!3d28.6139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2daa9eb4d0b%3A0x1234567890!2sYour%20School%20Name!5e0!3m2!1sen!2sin!4v1234567890"
    width="100%" 
    height="400" 
    style="border:0;" 
    allowfullscreen="" 
    loading="lazy">
  </iframe>
</div>
<div style="margin-top: 12px; text-align: center;">
  <a href="https://maps.google.com/?q=28.6139,77.2090" target="_blank">
    Open in Google Maps →
  </a>
</div>
```

---

## **Troubleshooting:**

### **Map not showing?**
- Check if you copied the complete `<iframe>` code
- Make sure you didn't miss the closing `</iframe>` tag
- Check browser console for errors (F12 → Console)

### **Map showing wrong location?**
- Go back to Google Maps
- Search again with more specific address
- Get new embed code

### **Want to customize map appearance?**
- In Google Maps, before clicking "Share", you can:
  - Zoom in/out to desired level
  - Switch to Satellite view
  - Then get the embed code

---

## **Need Help?**

If you're stuck, just tell me:
1. Your school's city/area
2. Or the Google Maps link to your school

I'll generate the exact code for you! 😊
