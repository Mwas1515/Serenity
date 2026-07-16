import Card from './ui/Card.jsx'

export default function ServiceCard({ service }) {
  return (
    <Card className="h-full flex flex-col">
      <h3 className="text-xl font-semibold text-teal mb-2">{service.name}</h3>
      <p className="text-ink/70 text-sm flex-1">{service.blurb}</p>
    </Card>
  )
}
