import { Michroma, Montserrat, Roboto_Mono } from 'next/font/google';

export const michroma = Michroma({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-michroma',
});

export const montserrat = Montserrat({
  weight: ['400', '500', '600', '700', '800'], // ✅ use 'weight' instead of 'weights'
  subsets: ['latin'],
  variable: '--font-montserrat',
});

export const robotoMono = Roboto_Mono({
  weight: ['400'], // Add more if needed
  subsets: ['latin'],
  variable: '--font-roboto-mono',
});
