import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { AnchorLink } from '@/components/Link';

interface AuthorProps {
  image: string;
  fallback: any;
  name: string;
  username: string;
}

export function Author({ image, fallback, name, username }: AuthorProps) {
  return (
    <div className="inline-flex flex-[0_0_auto] flex-row items-center gap-x-3">
      <Avatar className="h-9 w-9">
        <AvatarImage src={image} />
        <AvatarFallback>{fallback}</AvatarFallback>
      </Avatar>
      <div className="flex flex-col items-start justify-center">
        <p className="text-sm font-semibold">{name}</p>
        <AnchorLink variant="non-style" href="https://twitter.com/edroamz">
          <p className="text-sm text-slate-600 dark:text-slate-400">
            {`@${username}`}
          </p>
        </AnchorLink>
      </div>
    </div>
  );
}
