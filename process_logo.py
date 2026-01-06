from PIL import Image, ImageOps
import sys

def process_logo():
    try:
        # Load image
        img = Image.open("images/ghost-yachts-logo.png")
        img = img.convert("RGBA")
        
        # Get background color (top-left pixel)
        bg_color = img.getpixel((0, 0))
        with open("bg_color.txt", "w") as f:
            f.write(f"rgba({bg_color[0]}, {bg_color[1]}, {bg_color[2]}, {bg_color[3]/255})")
            
        # Create transparent version
        # Make all pixels matching bg_color transparent
        datas = img.getdata()
        newData = []
        tolerance = 10
        for item in datas:
            if abs(item[0] - bg_color[0]) < tolerance and                abs(item[1] - bg_color[1]) < tolerance and                abs(item[2] - bg_color[2]) < tolerance:
                newData.append((255, 255, 255, 0))
            else:
                newData.append(item)
        
        img.putdata(newData)
        img.save("images/ghost-yachts-logo-transparent.png", "PNG")
        
        # Create footer version (white text)
        # Invert colors (assuming black text becomes white, gold stays somewhat gold or we adjust)
        # Actually, simpler: make non-transparent pixels white?
        # Let's try to just use the transparent one first, or invert it.
        # If we invert, gold becomes blueish. We want to keep gold, change black to white.
        
        footer_data = []
        for item in newData:
            if item[3] == 0:
                footer_data.append(item)
            else:
                # If dark (black text), make white
                # If gold (approx (212, 175, 55)), keep gold
                r, g, b, a = item
                if r < 100 and g < 100 and b < 100: # It's dark/black
                     footer_data.append((255, 255, 255, a))
                else:
                     footer_data.append(item)
                     
        footer_img = Image.new("RGBA", img.size)
        footer_img.putdata(footer_data)
        footer_img.save("images/ghost-yachts-logo-footer.png", "PNG")
        
        print("Success")
        
    except Exception as e:
        with open("error.txt", "w") as f:
            f.write(str(e))

process_logo()
