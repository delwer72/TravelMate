// src/routes/upload.ts
import { Router, Request, Response } from 'express';

const router = Router();

/**
 * POST /api/upload
 * Uploads an image (base64, URL, or form-data) to ImgBB using IMAGEBB_API
 */
router.post('/', async (req: Request, res: Response) => {
  try {
    const apiKey = process.env.IMAGEBB_API || process.env.IMGBB_API_KEY;
    if (!apiKey) {
      res.status(500).json({
        success: false,
        message: 'IMAGEBB_API key is not configured in backend environment variables',
      });
      return;
    }

    const { image, name } = req.body;

    if (!image) {
      res.status(400).json({
        success: false,
        message: 'image (base64 string or image URL) is required',
      });
      return;
    }

    const formData = new FormData();
    formData.append('image', image);
    if (name) {
      formData.append('name', name);
    }

    const imgbbRes = await fetch(`https://api.imgbb.com/1/upload?key=${apiKey}`, {
      method: 'POST',
      body: formData,
    });

    const data = await imgbbRes.json();

    if (!imgbbRes.ok || !data.success) {
      console.error('ImgBB API response error:', data);
      res.status(imgbbRes.status || 400).json({
        success: false,
        message: data?.error?.message || 'Failed to upload image to ImgBB',
      });
      return;
    }

    res.json({
      success: true,
      url:         data.data.url,
      display_url: data.data.display_url || data.data.url,
      thumb_url:   data.data.thumb?.url,
      delete_url:  data.data.delete_url,
      title:       data.data.title,
    });
  } catch (error: any) {
    console.error('Server error during ImgBB upload:', error);
    res.status(500).json({
      success: false,
      message: error?.message || 'Internal server error uploading image',
    });
  }
});

export default router;
