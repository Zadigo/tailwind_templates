<template>
  <Card>
    <CardContent>
      <OrganizationChart :node="data" />
    </CardContent>
  </Card>
</template>

<script setup lang="ts">
interface OrganizationNode {
  label: string
  children?: OrganizationNode[]
}

const data = ref<OrganizationNode>({
  label: 'Argentina',
  children: [
    {
      label: 'Argentina',
      children: [
        {
          label: 'Argentina'
        },
        {
          label: 'Croatia'
        }
      ]
    },
    {
      label: 'France',
      children: [
        {
          label: 'France'
        },
        {
          label: 'Morocco'
        }
      ]
    }
  ]
})
</script>
