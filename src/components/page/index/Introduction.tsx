import React from 'react'
import SignatureQuentinHsu from '@/components/animata/signature/QuentinHsu.tsx'

export default function Introduction(): React.ReactElement {
  return (
    <>
      <div className="w-full flex justify-start items-center mb-8">
        <span className="text-4xl">
          👋
        </span>
        <div className="md:px-4 px-2 text-4xl">
          I'm
        </div>
        <div className="flex justify-center items-center w-60">
          <SignatureQuentinHsu />
        </div>
      </div>
      <p className="w-full px-5 leading-7">
        I am a developer and an open-source enthusiast.
        <br />
        I am primarily a web front-end developer, with a tech stack mainly focused on Vue. Of course, I also enjoy working with React. I am particularly fascinated by TypeScript, although I am still learning and practicing it. When it comes to code, I prefer explicit and controllable approaches, and dislike implicit and uncontrollable ones. I enjoy experimenting with new things and sharing my findings.
        <br />
        Currently residing in Chengdu, Sichuan, and planning to move to other cities in the future, such as Guangzhou or Shenzhen, in order to seek better career prospects.
        <br />
      </p>
    </>
  )
}
