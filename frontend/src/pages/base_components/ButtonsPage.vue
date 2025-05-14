<template>
  <Card>
    <CardContent>
      <h2 class="font-bold text-3xl">
        Buttons
      </h2>

      <div class="space-x-3 my-5">
        <Button variant="default">
          Default
        </Button>

        <Button variant="destructive">
          Destructive
        </Button>

        <Button variant="ghost">
          Ghost
        </Button>

        <Button variant="link">
          Link
        </Button>

        <Button variant="warning">
          Warning
        </Button>

        <Button variant="light" :active="true">
          Light
        </Button>

        <Button variant="outline">
          Outline
        </Button>

        <Button variant="secondary">
          Outline
        </Button>
      </div>

      <h2 class="font-bold text-3xl my-5">
        Dropdown
      </h2>

      <DropdownMenu>
        <DropdownMenuTrigger>
          <Button>
            Dropdown
          </Button>

          <DropdownMenuContent>
            <DropdownMenuItem>
              Item 1
            </DropdownMenuItem>

            <DropdownMenuItem>
              Item 2
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenuTrigger>
      </DropdownMenu>

      <h2 class="font-bold text-3xl my-5">
        Split button
      </h2>

      <SplitButton>
        Save

        <template #dropdown>
          <DropdownMenuContent>
            <DropdownMenuItem>First item</DropdownMenuItem>
          </DropdownMenuContent>
        </template>
      </SplitButton>
    </CardContent>
  </Card>
</template>
