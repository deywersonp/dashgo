import { ElementType, ReactNode } from "react";
import { Icon, Link, Text, LinkProps as ChakraLinkProps } from "@chakra-ui/react";
import { RiDashboardLine } from "react-icons/ri";

interface NavLinkProps extends ChakraLinkProps {
  icon: ElementType;
  children: ReactNode;
};

export const NavLink = ({
  icon,
  children,
  ...rest
}: NavLinkProps) => {
  return (
    <Link display="flex" alignItems="center" {...rest}>
      <Icon as={RiDashboardLine} fontSize="20" />
      <Text ml="4" fontWeight="medium">
        {children}
      </Text>
    </Link>
  )
};