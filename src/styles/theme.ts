type ITheme = {
  colors: {
    primary: string;
    red: string;
    black: string;
    white: string;
    gray: string;
    gradient1: string;
    gradient2: string;
    backgroundGray: string;
    backgroundDarkGray: string;
  }
};

export const theme: ITheme = {
  colors: {
    primary: '#123456',
    red: '#D01B1B',
    black: '#000000',
    white: '#FFFFFF',
    gray: '#A3A3A3',
    gradient1: '#ffafbd, #ffb3b4, #ffb7ac, #ffbda5, #ffc3a0',
    gradient2: '#2193b0, #37a3bf, #4ab3ce, #5cc4de, #6dd5ed',
    backgroundGray: '#FAF8FF',
    backgroundDarkGray: 'rgba(70, 70, 70, 0.3)',
  }
}
