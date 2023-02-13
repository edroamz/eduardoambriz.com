import { AnchorLink, Link } from '@/components/Link';
import { Text } from '@/components/Text';
import { Icons } from '@/components/Icons';
import { siteConfig } from '@/config/site';

export function SiteFooter() {
  return (
    <footer className="border-t dark:border-slate-800">
      <div className=" mx-auto mb-12 w-full max-w-7xl px-6 pt-10">
        <div className="flex flex-col flex-wrap items-center justify-center gap-5 laptop:flex-row laptop:justify-between">
          <Link href="/">
            <Icons.wordmark className="h-[18px] w-full" />
          </Link>
          <Text
            color="accents-2"
            size={14}
            className="text-center laptop:text-left"
          >
            Built by{' '}
            <AnchorLink href={siteConfig.links.twitter} variant="underline">
              edroamz
            </AnchorLink>
            . The source code is available on{' '}
            <AnchorLink href={siteConfig.links.github} variant="underline">
              GitHub
            </AnchorLink>
            .{' '}
          </Text>
        </div>
      </div>
    </footer>
  );
}
