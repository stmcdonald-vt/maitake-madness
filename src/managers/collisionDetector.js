import p5 from "p5";
import gp5 from "../sketch";

export default class CollisionDetector {
    /**
     * 
     * @param {p5.Image} sprite1 
     * @param {*} sprite2 
     */
    static spriteCollision(position1, sprite1, position2, sprite2) {
        const p1x = gp5.round(position1.x);
        const p1y = gp5.round(position1.y);
        const p2x = gp5.round(position2.x);
        const p2y = gp5.round(position2.y);
        const intersection = this.rectangleIntersection(
            {x: p1x, y: p1y, height: sprite1.height, width: sprite1.width},
            {x: p2x, y: p2y, height: sprite2.height, width: sprite2.width}
        )

        if (intersection === null) {return false}; // bounding boxes don't overlap so dont check pixels

        // With the number of calculations reduced, do a pixel perfect detection. Only check the pixels in the overlap between hitboxes.
        // Can be expensive, use sparingly.
        const xEnd = intersection.x + intersection.width;
        const yEnd = intersection.y + intersection.height;

        // Get the pixel arrays for both images
        const pixels1 = sprite1.pixels;
        const pixels2 = sprite2.pixels;

        // Check for pixel collision within the intersection region
        for (let x = intersection.x; x < xEnd; x++) {
            for (let y = intersection.y; y < yEnd; y++) {
                const index1 = (x - p1x + (y - p1y) * sprite1.width) * 4;
                const index2 = (x - p2x + (y - p2y) * sprite2.width) * 4;

                // Check if both pixels are non-transparent (alpha > 0)
                if (pixels1[index1 + 3] > 250 && pixels2[index2 + 3] > 250) {
                    return true; // Collision detected
                }
            }
        }
        return false; // no collision detected
    }

    getStartPixelIndex(deltas, sprite) {
        if (deltas.y === 0) {
            return deltas.x;
        }
    }

    // pixelStartIndex()

    static rectangleIntersection(rect1, rect2) {
        // top left coord is the larger x-y combination
        const x1 = Math.max(rect1.x, rect2.x);
        const y1 = Math.max(rect1.y, rect2.y);
      
        // bottom right coord is the smaller x-y combination
        const x2 = Math.min(rect1.x + rect1.width, rect2.x + rect2.width);
        const y2 = Math.min(rect1.y + rect1.height, rect2.y + rect2.height);
      
        if (x1 < x2 && y1 < y2) { // indicates overlap
          const intersectionWidth = x2 - x1;
          const intersectionHeight = y2 - y1;
          
          // Return the intersection rectangle
          return { x: x1, y: y1, width: intersectionWidth, height: intersectionHeight};
        } else {
          // No intersection
          return null;
        }
      }

    static checkRectangleRectangleCollision(r1x, r1y, r1w, r1h, r2x, r2y, r2w, r2h) {
        // Calculate the right and bottom edges of each rectangle
        const r1RightEdge = r1x + r1w;
        const r1BottomEdge = r1y + r1h;
        const r2RightEdge = r2x + r2w;
        const r2BottomEdge = r2y + r2h;

        // Check if either rectangle is to the left, right, above, or below the other
        return !(r1x >= r2RightEdge || r2x >= r1RightEdge || r1y >= r2BottomEdge || r2y >= r1BottomEdge)
    }
}