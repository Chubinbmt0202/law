
import React from 'react';
import Banner4 from '@/app/components/banner4';
import Section1 from '@/app/components/section1';
// import Section2 from '@/app/components/section2';
// import Section3 from '@/app/components/section3';
import Section4 from '@/app/components/section4';
import Section5 from '@/app/components/section5';
import Section6 from '@/app/components/section6';
import Section7 from '@/app/components/section7';
import Section8 from '@/app/components/section8';
import Section9 from '@/app/components/section9';
import Section10 from '@/app/components/section10';
// import Contact from '@/app/components/contact';

export default function Landingpage() {
    return (
        <section className="bg-white">
            <Banner4 />
            <Section1 />
            {/* <Section2 /> */}
            {/* <Section3 /> */}
            <Section4 />
            <Section5 />
            <Section6 />
            <Section7 />
            <Section8 />
            <Section9 />
            <Section10 />
        </section>
    );
}
