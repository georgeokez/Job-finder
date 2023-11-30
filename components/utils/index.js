export const jobTypes = ['Full-time', 'Part-time', 'Hybrid', 'Remote'];

export const checkImageURL = (url) => {
  if (!url) return false;
  else {
    const pattern = new RegExp(
      '^https?:\\/\\/.+\\.(png|jpg|jpeg|bmp|gif|webp)$',
      'i'
    );
    return pattern.test(url);
  }
};

export const RAPID_API_KEY =
  'f7fc7b61b1msh10152ca9281b4ebp145ce1jsn8d8eb575e87c';
