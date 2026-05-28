// app/bingo/[card]/page.tsx

interface PageProps {
  params: Promise<{
    card: string;
  }>;
}

export default async function BingoCard({ params }: PageProps) {
  const { card } = await params;
  
  return (
    <div className="page">
      <h1>Card Number: {card}</h1>
      <p>This page displays a randomized Bingo card with {card} as the seed.</p>
    </div>
  );
}