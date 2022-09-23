import { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import { Box, Flex, SimpleGrid, Text, theme } from '@chakra-ui/react';
import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';

const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
});

const options: ApexCharts.ApexOptions = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    foreColor: theme.colors.gray[500],
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    enabled: false,
  },
  xaxis: {
    type: 'datetime',
    axisBorder: {
      color: theme.colors.gray[600],
    },
    axisTicks: {
      color: theme.colors.gray[600],
    },
    categories: [
      '2021-03-18T08:00:00.000Z',
      '2021-03-19T08:00:00.000Z',
      '2021-03-20T08:00:00.000Z',
      '2021-03-21T08:00:00.000Z',
      '2021-03-22T08:00:00.000Z',
      '2021-03-23T08:00:00.000Z',
      '2021-03-24T08:00:00.000Z',
    ],
  },
  fill: {
    opacity: 0.3,
    type: 'gradient',
    gradient: {
      shade: 'dark',
      opacityFrom: 0.7,
      opacityTo: 0.3,
    },
  },
};

const series = [
  { name: 'series1', data: [31, 120, 10, 28, 61, 18, 189] }
];

const Dashboard: NextPage = () => {
  const [assembleGraphics, setAssembleGraphics] = useState(false);

  useEffect(() => {
    setAssembleGraphics(true);
  }, []);

  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        {assembleGraphics && (
          <SimpleGrid flex="1" gap="4" minChildWidth="320px" alignItems="flex-start">
            <Box
              p={["6", "8"]}
              bg="gray.800"
              borderRadius={8}
              pb="4"
            >
              <Text fontSize="lg" mb="4">
                Inscritos da Semana
              </Text>
              <Chart options={options} series={series} type="area" height={160} />
            </Box>
            <Box
              p={["6", "8"]}
              bg="gray.800"
              borderRadius={8}
              pb="4"
            >
              <Text fontSize="lg" mb="4">
                Taxa de Abertura
              </Text>
              <Chart options={options} series={series} type="area" height={160} />
            </Box>
          </SimpleGrid>
        )}

      </Flex>
    </Flex>
  )
};

export default Dashboard;
