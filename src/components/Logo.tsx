export function Logo(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 200 40" aria-hidden="true" {...props}>
      <g>
        <path
          className="fill-[#0078d4]"
          d="M20 10 L30 20 L20 30 L10 20 Z M20 8 L32 20 L20 32 L8 20 Z"
        />
        <path
          className="fill-zinc-900 dark:fill-white"
          d="M45 12h6c4 0 6 2 6 5.5s-2 5.5-6 5.5h-3v7h-3V12zm6 8.5c2 0 3-1 3-3s-1-3-3-3h-3v6h3zm12-8.5h6c4 0 6 2 6 5.5s-2 5.5-6 5.5h-3v7h-3V12zm6 8.5c2 0 3-1 3-3s-1-3-3-3h-3v6h3zM78 12h12v2.5h-9V21h8v2.5h-8v6.5h9V33H78V12zm10 0h3v21h-3V12zm12 10.5c0-6 3-10.5 9-10.5s9 4.5 9 10.5-3 10.5-9 10.5-9-4.5-9-10.5zm9-7.5c-3 0-6 2.5-6 7.5s3 7.5 6 7.5 6-2.5 6-7.5-3-7.5-6-7.5zm12-3h3v8.5c0 3 1.5 5 4.5 5s4.5-2 4.5-5V12h3v10.5c0 5-3 8-7.5 8s-7.5-3-7.5-8V12z"
        />
      </g>
    </svg>
  )
}
