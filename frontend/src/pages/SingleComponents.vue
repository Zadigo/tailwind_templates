<template>
  <section id="components" class="py-20">
    <div class="mx-auto max-w-5xl">
      <Card class="border-none">
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
          </div>
        </CardContent>
      </Card>
    </div>
  </section>
</template>
