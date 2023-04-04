'use client';

export default function NotFoundCatchAll({
  error,
  reset
}) {
  return (
    <html>
      <body>
        <h2>Page not found!</h2>

        <button onClick={() => reset()}>Try again</button>

      </body>
    </html>
  );
}



