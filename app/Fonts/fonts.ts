import { Michroma, Montserrat, Roboto_Mono } from 'next/font/google';

export const michroma = Michroma({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-michroma',
});

export const montserrat = Montserrat({
  subsets: ['latin'],
  weights: ['400', '500', '600', '700', '800'], // Make sure the weights are available
  variable: '--font-montserrat',
});
export const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto-mono',
});
