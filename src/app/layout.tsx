export const metadata = {
  title: "Konrad Think Pair Share",
  description: "Plataforma de Peer Programing",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
