<template>
  <section id="components" class="py-20">
    <div class="mx-auto max-w-5xl">
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

      <Card class="mt-4">
        <CardContent>
          <h2 class="font-bold text-3xl">
            List
          </h2>

          <List class="p-5">
            <ListItem :active="true">
              Kendall Jenner
            </ListItem>
            <ListItem>
              <ListAvatar :src="`avatar1.png`">
                <AvatarFallback>Fallback</AvatarFallback>
              </ListAvatar>
              <ListHeaders>
                <ListTitle>
                  Taylor Swift
                </ListTitle>
                <ListSubtitle>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse quisquam, magnam, molestias praesentium
                </ListSubtitle>
              </ListHeaders>
            </ListItem>
            <ListItem>
              <RouterLink to="/">
                Kylie Jenner
              </RouterLink>
            </ListItem>
          </List>
        </CardContent>
      </Card>

      <Card class="max-w-sm mt-4">
        <CardImage src="/avatar2.png" />

        <CardContent>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Quibusdam exercitationem voluptatum, amet unde earum ipsa obcaecati dolor 
          voluptate dolorem dolores vel cumque repudiandae reiciendis asperiores odio at, 
          sed aliquid aperiam.
        </CardContent>
      </Card>

      <Card class="mt-5">
        <CardContent>
          <!-- <VideoPlayer>
            <VideoOverlay />
            <VideoActions>
              <VideoActionVolume />
              <VideoActionMore />
            </VideoActions>
          </VideoPlayer> -->
          <VideoRoot />
        </CardContent>
      </Card>
    </div>
  </section>
</template>
