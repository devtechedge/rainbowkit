import React, { useContext } from 'react';
import { Box } from '../Box/Box';
import { ActionButton } from '../Button/ActionButton';
import { CloseButton } from '../CloseButton/CloseButton';
import { I18nContext } from '../RainbowKitProvider/I18nContext';
import { WalletButtonContext } from '../RainbowKitProvider/WalletButtonContext';
import { Text } from '../Text/Text';
import { getMobileDownloadUrl } from '../../wallets/downloadUrls';
import { WalletButton } from './MobileOptions';

export const MobileStatus = ({ onClose }: { onClose: () => void }) => {
  const { connector } = useContext(WalletButtonContext);
  const { i18n } = useContext(I18nContext);
  const connectorName = connector?.name || '';
  const mobileDownloadUrl = getMobileDownloadUrl(connector ?? undefined);

  return (
    <Box>
      <Box
        display="flex"
        paddingBottom="32"
        justifyContent="center"
        alignItems="center"
        background="profileForeground"
        flexDirection="column"
      >
        <Box
          width="full"
          display="flex"
          justifyContent="flex-end"
          marginTop="18"
          marginRight="24"
        >
          <CloseButton onClose={onClose} />
        </Box>
        <Box width="60">
          <WalletButton onClose={onClose} wallet={connector!} connecting />
        </Box>
        <Box marginTop="20">
          <Text
            textAlign="center"
            color="modalText"
            size="18"
            weight="semibold"
          >
            {i18n.t('connect.status.connect_mobile', {
              wallet: connectorName,
            })}
          </Text>
        </Box>

        <Box maxWidth="full" marginTop="8" paddingX="24">
          <Text textAlign="center" color="modalText" size="16" weight="medium">
            {i18n.t('connect.status.confirm_mobile', {
              wallet: connectorName,
            })}
          </Text>
        </Box>

        {mobileDownloadUrl ? (
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap="12"
            marginTop="24"
            paddingX="24"
          >
            <Text
              textAlign="center"
              color="modalTextSecondary"
              size="14"
              weight="medium"
            >
              {i18n.t('connect.secondary_action.get.description', {
                wallet: connectorName,
              })}
            </Text>
            <ActionButton
              href={mobileDownloadUrl}
              label={i18n.t('connect.secondary_action.get.label')}
              type="secondary"
            />
          </Box>
        ) : null}
      </Box>
    </Box>
  );
};
