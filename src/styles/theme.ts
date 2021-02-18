type ITheme = {
  colors: {
    primary: string;
    red: string;
    black: string;
    white: string;
    gray: string;
    gradient1: string;
    gradient2: string;
  }
};

export const theme: ITheme = {
  colors: {
    primary: "#123456",
    red: '#FF4D4D',
    black: '#000000',
    white: '#FFFFFF',
    gray: '#A3A3A3',
    gradient1: '#d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa',
    gradient2: '#ca4040, #c13958, #b13b6b, #9b417a, #824782, #6e4b83, #5b4d81, #4a4e7c, #3d4e75, #2f4b62, #2f4858',
  }
}
