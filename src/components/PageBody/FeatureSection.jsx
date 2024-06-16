import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'STEP 1',
    description:
      'A health-focused SaaS startup encountered hiring complexities as it aimed to swiftly expand its team from 3 to 15 members within three months, with limited resources and brand awareness.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'STEP 2',
    description:
      'TALENTSPOKE innovative approach was chosen as it offered an end-to-end solution, including developing the employee value proposition, creating job descriptions and quickly recruiting top talent, all on a flexible subscription model.',
    icon: LockClosedIcon,
  },
  {
    name: 'STEP 3',
    description:
      'TALENTSPOKE assembled a dedicated dream team of 12 new experts within three months, while maintaining a 98.4% positive candidate experience and achieving a 56% reduction in recruitment expenses.',
    icon: ArrowPathIcon,
  },
  {
    name: 'STEP 4',
    description:
      'TALENTSPOKE’s end-to-end recruitment solution and flexible subscription model is ideal for early stage companies in need of building out their initial team, with limited resources and no room for error.',
    icon: FingerPrintIcon,
  },
]

export default function FeatureSection() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Deploy faster</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Introduction
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
          In this case study, we explore how TALENTSPOKE partnered with a Canadian health-focused SaaS technology startup to overcome significant hiring challenges and rapidly build an exceptional team of 12 initial employees within a short span of three months. Let's delve into the journey of how TALENTSPOKE played a pivotal role in their success:
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
