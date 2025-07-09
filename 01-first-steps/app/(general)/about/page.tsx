import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "About | First Steps",
  description: "SEO DESCRIPCTION",
};

function AboutPage() {
  return (
    <div  className='text-5xl'>AboutPage</div>
  )
}

export default AboutPage