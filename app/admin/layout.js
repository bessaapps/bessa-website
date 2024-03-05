import { Grid, GridItem } from "@chakra-ui/react";
import AdminTop from "@/components/navigation/AdminTop";

export const metadata = {
  title:
    "Admin | Bessa LGBTQIA+ Community App | Safe Inclusive Body-Positive LGBTQIA+ Community"
};

export default function RootLayout({ children }) {
  return (
    <section>
      <Grid
        templateAreas={`"header" "main"`}
        gridTemplateRows={"auto 1fr"}
        h={"calc(100vh - 61px - 48px)"}
      >
        <GridItem area={"header"} bg={"primary.700"} px={4} py={2}>
          <header>
            <nav>
              <AdminTop />
            </nav>
          </header>
        </GridItem>
        <GridItem area={"main"} overflowY={"auto"}>
          {children}
        </GridItem>
      </Grid>
    </section>
  );
}
