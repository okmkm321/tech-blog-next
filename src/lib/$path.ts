export const pagesPath = {
  "admin": {
    "blogs": {
      $url: (url?: { hash?: string }) => ({ pathname: '/admin/blogs' as const, hash: url?.hash })
    },
    $url: (url?: { hash?: string }) => ({ pathname: '/admin' as const, hash: url?.hash })
  },
  $url: (url?: { hash?: string }) => ({ pathname: '/' as const, hash: url?.hash })
}

export type PagesPath = typeof pagesPath
