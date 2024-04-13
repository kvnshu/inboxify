import { Button } from "@nextui-org/button";
import { Image } from "@nextui-org/image";
import { Link } from '@nextui-org/link';

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div id="hero" className='flex flex-row'>
        <div>
          <p className="text-6xl">LearnLetter</p>
          <div className="flex flex-row items-center justify-between">
            <Button
              as={Link}
              href="/signup"
              color="primary"
            >
              Sign up
            </Button>
            <Button
              as={Link}
              href="/signin"
              color="primary"
            >
              Sign in
            </Button>
          </div>
        </div>
        <div>
          <Image
            width={400}
            alt="LearnLetter Hero Image"
            src="/learnletter-hero.png"
          />
        </div>
      </div>
    </main>
  )
}
