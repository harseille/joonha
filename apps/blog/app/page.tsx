import Image, { type ImageProps } from 'next/image';
import { Button } from '@repo/ui/button';

import styles from './page.module.css';
import { Badge } from '~/shared/components/ui/badge';
import DemoList from '~/features/demo/ui/DemoList';

type Props = Omit<ImageProps, 'src'> & {
  srcLight: string;
  srcDark: string;
};

const ThemeImage = (props: Props) => {
  const { srcLight, srcDark, ...rest } = props;
  return (
    <>
      <Image {...rest} src={srcLight} className="imgLight" />
      <Image {...rest} src={srcDark} className="imgDark" />
    </>
  );
};

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <ThemeImage
          className={styles.logo}
          srcLight="turborepo-dark.svg"
          srcDark="turborepo-light.svg"
          alt="Turborepo logo"
          width={180}
          height={38}
          priority
        />
        <ol>
          <li>
            Get started by editing <code>apps/web/app/page.tsx</code>
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <div className="w-full max-w-md space-y-4 mt-8">
          <div className="rounded-lg border bg-card p-6 shadow-sm">
            <h3 className="text-2xl font-semibold leading-none tracking-tight mb-4">
              shadcn UI 테스트
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              버튼과 카드 컴포넌트를 사용한 예제입니다.
            </p>
            <div className="flex flex-col gap-2"></div>
          </div>
          <Badge variant="outline">Badge</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="destructive">Destructive</Badge>

          <div className="rounded-lg border bg-card p-6 shadow-sm">
            <div className="space-y-2">
              <h4 className="font-medium leading-none">알림</h4>
              <p className="text-sm text-muted-foreground">
                다크모드를 지원하는 디자인 시스템이 적용되었습니다.
              </p>
            </div>
          </div>
        </div>

        <DemoList />

        <div className={styles.ctas}>
          <a
            className={styles.primary}
            href="https://vercel.com/new/clone?demo-description=Learn+to+implement+a+monorepo+with+a+two+Next.js+sites+that+has+installed+three+local+packages.&demo-image=%2F%2Fimages.ctfassets.net%2Fe5382hct74si%2F4K8ZISWAzJ8X1504ca0zmC%2F0b21a1c6246add355e55816278ef54bc%2FBasic.png&demo-title=Monorepo+with+Turborepo&demo-url=https%3A%2F%2Fexamples-basic-web.vercel.sh%2F&from=templates&project-name=Monorepo+with+Turborepo&repository-name=monorepo-turborepo&repository-url=https%3A%2F%2Fgithub.com%2Fvercel%2Fturborepo%2Ftree%2Fmain%2Fexamples%2Fbasic&root-directory=apps%2Fdocs&skippable-integrations=1&teamSlug=vercel&utm_source=create-turbo"
            target="_blank"
            rel="noopener noreferrer">
            <Image
              className={styles.logo}
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            href="https://turbo.build/repo/docs?utm_source"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondary}>
            Read our docs
          </a>
        </div>
        <Button appName="web" className={styles.secondary}>
          Open alert
        </Button>
        <div className="bg-blue-500 text-white p-4 rounded shadow-lg mt-8">
          This is a Tailwind CSS test component!
        </div>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com/templates?search=turborepo&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer">
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          href="https://turbo.build?utm_source=create-turbo"
          target="_blank"
          rel="noopener noreferrer">
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to turbo.build →
        </a>
      </footer>
    </div>
  );
}
