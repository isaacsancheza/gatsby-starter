import * as React from 'react'

export interface GoogleProps {
  schema: object
}

export default function Google({ schema }: GoogleProps) {
  // Stringify the schema object (adding the "null, 2" gives you readable json)
  const schemaAsString = JSON.stringify(schema, null, 2)
  return <script type="application/ld+json">{schemaAsString}</script>
}
