export interface ISlide {
  picture: Image;
  title: string;
  text: string;
  btnColor: string;
}

interface Image {
  src: string;
  alt: string;
}
